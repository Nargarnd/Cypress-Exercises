export const ContextKeys = {
    ApiResponseKey: 'ApiResponse',

    setApiResponseKey: function setApiResponseKey(contextKey: string): void {
        ContextKeys.ApiResponseKey = contextKey;
    }
}

class GlobalContext<T> {
    private items: {
      [key: string]: T
    } = {}
  
    public getValue<U extends T>(key: string): U {
      return this.items[key] as U
    }
  
    public setValue(key: string, value: T): void {
      this.items[key] = value
    }
  
    public clear(): void {
      this.items = {}
    }
  }
  
  export const globalContext = new GlobalContext<any>()