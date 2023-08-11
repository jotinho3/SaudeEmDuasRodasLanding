// fbq.d.ts
interface FbqOptions {
    currency?: string;
    value?: number;
    // Add other properties here as needed
  }
  
  declare function fbq(command: string, event: string, options?: FbqOptions): void;
  