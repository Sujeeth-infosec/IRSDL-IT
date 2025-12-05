import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const SocialShare = ({ 
  url = window.location.href,
  title = document.title,
  description = 'Check out this page from IRSDL IT',
  className = ''
}: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const openShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('facebook')}
        className="text-blue-600 hover:bg-blue-50"
      >
        <Facebook className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('twitter')}
        className="text-blue-400 hover:bg-blue-50"
      >
        <Twitter className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('linkedin')}
        className="text-blue-700 hover:bg-blue-50"
      >
        <Linkedin className="w-4 h-4" />
      </Button>
      {navigator.share && (
        <Button
          variant="outline"
          size="sm"
          onClick={nativeShare}
          className="text-gray-600 hover:bg-gray-50"
        >
          <Share2 className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};