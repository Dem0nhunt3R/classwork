export default function Car({item}) {
  return (
    <div>
        -{item.model}, price: {item.price}$, manufactured in {item.year} year.
    </div>
  );
}