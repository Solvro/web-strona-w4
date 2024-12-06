const members = [
  {
    firstName: "Włodzimierz",
    lastName: "Greblicki",
    titlePrefix: "prof. dr hab. inż.",
    titleSuffix: "Professor Emeritus",
    image: "http://diuna.iiar.pwr.edu.pl/greblicki/ICONS/wgre.jpg",
    isActive: false,
  },
  {
    firstName: "Zygmunt",
    lastName: "Hasiewicz",
    titlePrefix: "prof. dr hab. inż.",
    titleSuffix: "Professor Emeritus",
    isActive: false,
  },
  {
    firstName: "Ryszard",
    lastName: "Klempous",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    image: "https://0.academia-photos.com/50234834/16584101/16901902/s200_ryszard.klempous.jpg",
    isActive: true,
  },
  {
    firstName: "Przemysław",
    lastName: "Śliwiński",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    image:
      "http://diuna.ict.pwr.wroc.pl/sliwinski/Przemysław%20Śliwiński%20-%20Official%20Home%20Page_pliki/sliwinski-72dpi.jpg",
    isActive: true,
  },
  {
    firstName: "Paweł",
    lastName: "Wachel",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    image: "http://pawel.wachel.staff.iiar.pwr.wroc.pl/images/img0006.jpg",
    isActive: true,
  },
  {
    firstName: "Grzegorz",
    lastName: "Mzyk",
    titlePrefix: "dr hab. inż.",
    titleSuffix: "prof. ucz.",
    image: "http://staff.iiar.pwr.wroc.pl/grzegorz.mzyk/gmusa.jpg",
    isActive: true,
  },
  {
    firstName: "Konrad",
    lastName: "Kluwak",
    titlePrefix: "dr inż.",
    image:
      "https://i1.wp.com/konrad.kluwak.staff.iiar.pwr.edu.pl/wp-content/uploads/2019/04/IMG_6208-1.jpg?w=1050",
    isActive: true,
  },

  {
    firstName: "Ewa",
    lastName: "Szlachcic",
    titlePrefix: "dr inż.",
    image: "http://ewa.szlachcic.staff.iiar.pwr.wroc.pl/index_pliki/image003.jpg",
    isActive: true,
  },
  {
    firstName: "Barbara",
    lastName: "Łysakowska",
    titlePrefix: "dr inż.",
    isActive: true,
  },
  {
    firstName: "Jerzy",
    lastName: "Kotowski",
    titlePrefix: "dr inż.",
    isActive: true,
  },

  {
    firstName: "Maciej",
    lastName: "Filiński",
    titlePrefix: "mgr inż.",
    isActive: true,
  },
];

export function OurTeam() {
  return (
    <div className="mt-14">
      <h2 className="section-header mb-10">Our Team</h2>
      <ul className="mt-3 mb-6 sm:px-12 lg:px-0 flex flex-row gap-3 justify-center flex-wrap">
        {members.map((member) => (
          <li>
            <div className="mx-auto text-center w-[100px] flex-shrink mb-2">
              <div className="size-20 border-[3px] mx-auto mb-1 border-brand rounded-full">
                <img
                  src={
                    member.image ||
                    `https://ui-avatars.com/api/?background=cf6967&color=fff&name=${member.firstName}+${member.lastName}`
                  }
                  alt=""
                  className="rounded-full size-full object-cover"
                />
              </div>
              <small className="text-xs block mt-2">{member.titlePrefix}</small>
              <p className="text-sm block font-medium leading-tight">
                {member.firstName} {member.lastName}
              </p>
              {member.titleSuffix && (
                <em className="text-xs block leading-tight">{member.titleSuffix}</em>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
