// Beehiiv API Client for PulsePost

const BEEHIIV_API_BASE = 'https://api.beehiiv.com/v2'

export interface BeehiivConfig {
  apiKey: string
  publicationId?: string
}

export interface BeehiivPublication {
  id: string
  name: string
  description: string
  website: string
  created: number
  subscription_count?: number
}

export interface BeehiivSubscription {
  id: string
  email: string
  status: 'validating' | 'active' | 'inactive' | 'pending'
  created: number
  subscription_tier?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  referring_site?: string
  referral_code?: string
  custom_fields?: Array<{
    name: string
    value: string
  }>
  tags?: string[]
}

export interface BeehiivPost {
  id: string
  title: string
  subtitle?: string
  slug: string
  status: 'draft' | 'confirmed' | 'archived'
  publish_date?: number
  displayed_date?: number
  split_test_id?: string
  audience: 'free' | 'premium' | 'both'
  content_tags?: string[]
  stats?: {
    email?: {
      recipients?: number
      opens?: number
      unique_opens?: number
      clicks?: number
      unique_clicks?: number
    }
    web?: {
      views?: number
    }
  }
}

export interface BeehiivListParams {
  page?: number
  limit?: number
  expand?: string[]
  status?: string
}

export class BeehiivClient {
  private apiKey: string
  private publicationId?: string

  constructor(config: BeehiivConfig) {
    this.apiKey = config.apiKey
    this.publicationId = config.publicationId
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(`${BEEHIIV_API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.message || `Beehiiv API error: ${response.status}`)
    }

    return response.json()
  }

  // Publications
  async getPublications(): Promise<{ data: BeehiivPublication[] }> {
    return this.request('/publications')
  }

  async getPublication(publicationId: string): Promise<{ data: BeehiivPublication }> {
    return this.request(`/publications/${publicationId}`)
  }

  // Subscriptions
  async getSubscriptions(
    publicationId: string,
    params?: BeehiivListParams
  ): Promise<{ data: BeehiivSubscription[]; total_results: number }> {
    const queryParams = new URLSearchParams()
    if (params?.page) queryParams.set('page', params.page.toString())
    if (params?.limit) queryParams.set('limit', params.limit.toString())
    if (params?.expand) queryParams.set('expand[]', params.expand.join(','))
    if (params?.status) queryParams.set('status', params.status)

    const query = queryParams.toString()
    return this.request(`/publications/${publicationId}/subscriptions${query ? `?${query}` : ''}`)
  }

  async getSubscription(
    publicationId: string,
    subscriptionId: string
  ): Promise<{ data: BeehiivSubscription }> {
    return this.request(`/publications/${publicationId}/subscriptions/${subscriptionId}`)
  }

  async createSubscription(
    publicationId: string,
    data: {
      email: string
      reactivate_existing?: boolean
      send_welcome_email?: boolean
      utm_source?: string
      utm_medium?: string
      utm_campaign?: string
      referring_site?: string
      custom_fields?: Array<{ name: string; value: string }>
    }
  ): Promise<{ data: BeehiivSubscription }> {
    return this.request(`/publications/${publicationId}/subscriptions`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateSubscription(
    publicationId: string,
    subscriptionId: string,
    data: Partial<BeehiivSubscription>
  ): Promise<{ data: BeehiivSubscription }> {
    return this.request(`/publications/${publicationId}/subscriptions/${subscriptionId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  async deleteSubscription(
    publicationId: string,
    subscriptionId: string
  ): Promise<void> {
    await this.request(`/publications/${publicationId}/subscriptions/${subscriptionId}`, {
      method: 'DELETE',
    })
  }

  // Posts
  async getPosts(
    publicationId: string,
    params?: BeehiivListParams
  ): Promise<{ data: BeehiivPost[]; total_results: number }> {
    const queryParams = new URLSearchParams()
    if (params?.page) queryParams.set('page', params.page.toString())
    if (params?.limit) queryParams.set('limit', params.limit.toString())
    if (params?.expand) queryParams.set('expand[]', params.expand.join(','))
    if (params?.status) queryParams.set('status', params.status)

    const query = queryParams.toString()
    return this.request(`/publications/${publicationId}/posts${query ? `?${query}` : ''}`)
  }

  async getPost(
    publicationId: string,
    postId: string
  ): Promise<{ data: BeehiivPost }> {
    return this.request(`/publications/${publicationId}/posts/${postId}?expand[]=stats`)
  }

  // Validate API key
  async validateApiKey(): Promise<boolean> {
    try {
      await this.getPublications()
      return true
    } catch {
      return false
    }
  }

  setPublicationId(publicationId: string) {
    this.publicationId = publicationId
  }
}

// Factory function to create a Beehiiv client
export function createBeehiivClient(apiKey: string, publicationId?: string) {
  return new BeehiivClient({ apiKey, publicationId })
}
