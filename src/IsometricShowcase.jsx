function IsometricShowcase({
  src = '/placeholder.jpg',
  alt = 'My Project Showcase',
  className = '',
}) {
  return (
    <div className={`isometric-showcase${className ? ` ${className}` : ''}`}>
      <figure className="isometric-showcase__image">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </figure>
    </div>
  )
}

export default IsometricShowcase
