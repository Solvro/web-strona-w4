/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'ui-avatars.com',
      'grzegorz.mzyk.staff.iiar.pwr.wroc.pl',
      'ewa.szlachcic.staff.iiar.pwr.wroc.pl',
      'diuna.ict.pwr.wroc.pl',
      'pawel.wachel.staff.iiar.pwr.wroc.pl'

    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;