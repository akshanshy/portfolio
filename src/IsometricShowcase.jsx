function IsometricShowcase({
  src = '/placeholder.jpg',
  alt = 'My Project Showcase',
  className = '',
  fullSize = false,
}) {
  const classes = ['isometric-showcase']
  if (fullSize) classes.push('isometric-showcase--natural')
  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')}>
      <figure className="isometric-showcase__image">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </figure>
    </div>
  )
}

export default IsometricShowcase
