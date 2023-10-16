export type CatCardProps = {
  id: number;
  name: string;
  image: string;
};

const CatCard = ({ id, name, image }: CatCardProps) => {
  return (
    <img
      srcSet={`${image}?w=164&h=164&fit=crop&auto=format 1x,
        ${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      src={image}
      alt={name}
      id={id.toString()}
      loading="lazy"
    />
  );
};

export default CatCard;
