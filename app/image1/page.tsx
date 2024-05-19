// Static import
import Image from "next/image";
import cat from '@/public/cat.jpg';

export default function Page() {
  return (
    <div className="flex flex-col gap-y-[15px]">
      <Image src={cat} alt="cat image"/>
      {/* Public folder reference */}
      <Image src={"/cat.jpg"} width={448} height={336}  alt="cat image" />
    </div>
  );
}
