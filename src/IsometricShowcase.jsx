function IsometricShowcase({
  src = '/placeholder.jpg',
  alt = 'My Project Showcase',
  tilt = 'left',
  className = '',
}) {
  return (
    <div className={`isometric-showcase isometric-showcase--${tilt}${className ? ` ${className}` : ''}`}>
      <div className="isometric-showcase__base" aria-hidden="true" />
      <figure className="isometric-showcase__image">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </figure>
    </div>
  )
}

export default IsometricShowcase
