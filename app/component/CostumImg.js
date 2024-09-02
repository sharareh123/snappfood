import Image from 'next/image';

const CustomImage = ({ src, alt, width, height }) => {
  return (
    <div style={{ position: 'relative', width, height }}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default CustomImage;