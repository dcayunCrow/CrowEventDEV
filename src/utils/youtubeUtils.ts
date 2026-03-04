// Extraer el video ID de una URL de YouTube (youtube.com o youtu.be)
const getYouTubeVideoId = (url: string): string | null => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes('youtube.com')) {
      return urlObj.searchParams.get('v') || null;
    }
    if (urlObj.hostname.includes('youtu.be')) {
      return urlObj.pathname.slice(1) || null;
    }
    return null;
  } catch {
    return null;
  }
};

// Convertir URL de YouTube a formato embed
export const getYouTubeEmbedUrl = (url: string): string | null => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

// Obtener thumbnail de YouTube sin necesidad de API key
export const getYouTubeThumbnail = (url: string): string | null => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};
