import Link from 'next/link'
import { AiFillFacebook, AiFillGooglePlusSquare, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare } from 'react-icons/ai'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <Link href='#'>
              <a target='_blank'><AiFillFacebook /></a>
            </Link>
            <Link href='#'>
              <a target='_blank'><AiFillGooglePlusSquare /></a>
            </Link>
            <Link href='#'>
              <a target='_blank'><AiFillInstagram /></a>
            </Link>
            <Link href='#'>
              <a target='_blank'><AiFillYoutube /></a>
            </Link>
            <Link href='#'>
              <a target='_blank'><AiFillTwitterSquare /></a>
            </Link>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Ehiedu</span>
            </span>
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                {" "}
                <Typical loop={Infinity} steps={[
                  'Ethusiatic Dev', 500,
                  'Full Stack Developer', 500,
                  'MERN Stack Dev', 500,
                  'Cross Platform v', 500,
                  'Nextjs Developer', 500,
                ]} wrapper="p" />
              </h1>
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
