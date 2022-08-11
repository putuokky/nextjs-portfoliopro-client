import Link from 'next/link'
import { AiFillFacebook, AiFillGooglePlusSquare, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare } from 'react-icons/ai'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
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
                  'Ethusiatic Dev', 1000,
                  'Full Stack Developer', 1000,
                  'MERN Stack Dev', 1000,
                  'Cross Platform v', 1000,
                  'Nextjs Developer', 1000,
                ]} wrapper="p" />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building applications with front and back end operations.
              </span>
            </span>
          </div>

          <div className='profile-optins'>
            <button className='btn primary-btn'>
              {""}
              Hire Me{" "}
            </button>
            <Link href='/ehizcv.pdf'>
              <a download="Ehiedu ehizcv.pdf">
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </Link>
          </div>
        </div>

        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}
