import { apiConfig, apiEndpoints } from './config'

class ApiService {
  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${apiConfig.baseURL}${endpoint}`
    const config = {
      ...options,
      headers: {
        ...apiConfig.headers,
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  async getHealth() {
    return this.request(apiEndpoints.health)
  }

  async getHello() {
    return this.request(apiEndpoints.hello)
  }
}

export const apiService = new ApiService()