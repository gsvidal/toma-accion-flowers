import { Directory } from '../../components/directory/directory.component';

export function Home() {
  const categories = [
    {
      id: 1,
      title: 'Rosas',
      imgUrl: 'assets/images/categories-rosas.png',
    },
    {
      id: 2,
      title: 'Tulipanes',
      imgUrl: 'assets/images/categories-tulipanes.png',
    },
    {
      id: 3,
      title: 'Arreglos',
      imgUrl: 'assets/images/categories-arreglos.png',
    },
    {
      id: 4,
      title: 'Orquídeas',
      imgUrl: 'assets/images/categories-orquideas.png',
    },
    {
      id: 5,
      title: 'Plantas',
      imgUrl: 'assets/images/categories-plantas.png',
    },
  ];
  return <Directory categories={categories} />;
}
