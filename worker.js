import html from './main.html';
import classData from './class_data.txt';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Serve main.html for root path
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
    
    // Serve class_data.txt
    if (url.pathname === '/class_data.txt') {
      return new Response(classData, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
    
    return new Response('Not Found', { status: 404 });
  }
}
