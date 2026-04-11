export default function SpeciesGallery({ images, name }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((url, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl cursor-pointer"
          onClick={() => console.log('Gallery click:', url)}
        >
          <img
            src={url}
            alt={`${name} ${i + 1}`}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}