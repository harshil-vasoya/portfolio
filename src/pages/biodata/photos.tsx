import { Card } from "@/components/ui/card";
import ImageZoom from "@/components/shared/image-zoom";

export default function Photos() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ImageZoom
          src="https://public.rajraiyani.dev/bio-photo-1.webp"
          alt="Harshil Vasoya"
          className="rounded-lg md:h-full md:max-h-96 md:w-full object-cover"
        />
        <ImageZoom
          src="https://public.rajraiyani.dev/bio-photo-2.webp"
          alt="Harshil Vasoya"
          className="rounded-lg md:h-full md:max-h-96 md:w-full object-cover"
        />
        <ImageZoom
          src="https://public.rajraiyani.dev/bio-photo-3.webp"
          alt="Harshil Vasoya"
          className="rounded-lg md:h-full md:max-h-96 md:w-full object-cover"
        />
      </div>
    </Card>
  );
}
