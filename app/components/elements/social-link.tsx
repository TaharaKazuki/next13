import ctl from '@netlify/classnames-template-literals'
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'

type Props = {
  isShareURL?: boolean
  link: string
  platform: Icons
}

const ICONS = {
  facebook: <Facebook size="18" />,
  github: <Github size="18" />,
  instagram: <Instagram size="18" />,
  linkedin: <Linkedin size="18" />,
  x: <Twitter size="18" />,
  youtube: <Youtube size="18" />,
} as const

type Icons = keyof typeof ICONS

const SocialLink = ({ isShareURL = false, link, platform }: Props) => {
  return (
    <Link href={link} className={ctl(``)}>
      <div
        className={ctl(
          `${
            isShareURL &&
            `
              text-ellipsis
              rounded-md 
              bg-neutral-200
              px-3 
              py-2 
              text-left 
              text-neutral-600 
              transition-colors 
              duration-300 
              ease-in-out
              hover:bg-neutral-600
              hover:text-neutral-100`
          }`,
        )}
      >
        {ICONS[platform]}
      </div>
    </Link>
  )
}

export default SocialLink
