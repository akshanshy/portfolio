import { useRef } from 'react'

function IsometricShowcase({
  src = '/placeholder.jpg',
  alt = 'My Project Showcase',
  className = '',
  fullSize = false,
}) {
  const imageRef = useRef(null)
  const classes = ['isometric-showcase']
  if (fullSize) classes.push('isometric-showcase--natural')
  if (className) classes.push(className)

  const handleMouseMove = (event) => {
    const image = imageRef.current
    if (!image) return

    const bounds = event.currentTarget.getBoundingClientRect()
    if (bounds.width === 0 || bounds.height === 0) return

    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    const maxTilt = 6
    const rotateX = -y * maxTilt
    const rotateY = x * maxTilt

    image.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
  }

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }
  }

  return (
    <div className={classes.join(' ')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <figure className="isometric-showcase__image" ref={imageRef}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </figure>
    </div>
  )
}

export default IsometricShowcase
