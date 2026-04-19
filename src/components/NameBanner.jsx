import nameBanner from '../assets/name_banner_transparent.png'
import letterAssets from '../letterAssets'
import './NameBanner.css'

const letters = [
  { key: 'pinkWhiteG', alt: 'G', className: 'letter-g flutter-a' },
  { key: 'pinkWhiteI', alt: 'I', className: 'letter-i flutter-b' },
  { key: 'pinkWhiteA', alt: 'A', className: 'letter-a1 flutter-c' },
  { key: 'pinkWhiteS', alt: 'S', className: 'letter-s flutter-a' },
  { key: 'pinkWhiteC', alt: 'C', className: 'letter-c flutter-b' },
  { key: 'pinkWhiteO', alt: 'O', className: 'letter-o1 flutter-c' },
  { key: 'pinkWhiteZ', alt: 'Z', className: 'letter-z1 flutter-a' },
  { key: 'pinkWhiteZ', alt: 'Z', className: 'letter-z2 flutter-b' },
  { key: 'pinkWhiteA', alt: 'A', className: 'letter-a2 flutter-c' },
  { key: 'pinkWhiteR', alt: 'R', className: 'letter-r flutter-a' },
  { key: 'pinkWhiteO', alt: 'O', className: 'letter-o2 flutter-b' },
]

function NameBanner() {
  return (
    
    <div className="name-banner-wrapper">
      <img src={nameBanner} alt="Name Banner" className="name-banner-base" />

      {letters.map((letter, index) => (
        
        <img
          key={`${letter.key}-${index}`}
          src={letterAssets[letter.key]}
          alt={letter.alt}
          className={`banner-letter ${letter.className}`}
        />
      ))}
    </div>
  )
}

export default NameBanner