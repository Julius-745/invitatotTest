interface INavChild {
    title: string;
    link: string;
  }
  
  export interface INavigation {
    name: string;
    link?: string;
    children?: INavChild[];
  }
  
  export const Navigation: Array<INavigation> = [
    {
      name: "Pasang Baru",
      link: "#Pasang",
    },
    {
      name: "Tentang Kami",
      link: "#Tentang",
    },
    {
      name: "Aduan",
      link: "#Aduan",
    },
  ];
  
  export const FooterNav: Array<INavigation> = [
    {
      name: "Pasang Baru",
      link: "#Pasang",
    },
    {
      name: "Tentang Kami",
      link: "#Tentang",
    },
    {
      name: "Aduan",
      link: "#Aduan",
    },
  ]
  