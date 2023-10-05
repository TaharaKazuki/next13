import Image from 'next/image'

import { CTA_CARD_IMAGE } from '@/assets/url'

const CTACard = () => {
  return (
    <div className="relative overflow-hidden rounded-md bg-slate-100 px-6 py-10">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      <Image
        fill
        alt="CTA Image"
        className="object-cover object-center"
        src={CTA_CARD_IMAGE}
      />
      <div className="relative z-20">
        <div className="text-lg font-medium">#explore the world</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the world with me!
        </h3>
        <p className="mt-2 max-w-lg text-lg">
          Explore the world with me! I m traveling around xxxxxxxxxxxxxxx
          xxxxxxxxxxx xxxxxx xxxxxxx
        </p>
        <form className="mt-6 flex w-full items-center gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md bg-white/80 px-3 py-2 text-base outline-none ring-neutral-600 placeholder:text-sm focus:ring-2 md:w-auto"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-md bg-neutral-900 px-3 py-2 text-neutral-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default CTACard
