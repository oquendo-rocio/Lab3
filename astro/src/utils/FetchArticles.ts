interface Article {
    id: number;
    attributes: {
    title: string;
    date: string;
    content: string;
    };
  }
  
  export async function FetchArticles(): Promise<Article[]> {
    const response = await fetch('http://127.0.0.1:1337/api/articles');
    const { data } = await response.json();
    return data;
  }

  export function extractImageUrl(content: string): string | undefined {
    const match = content.match(/!\[.?\]\((.?)\)/);
    return match ? match[1] : undefined; 
  }
  