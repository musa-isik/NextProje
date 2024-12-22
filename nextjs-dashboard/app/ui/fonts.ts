import {Inter, Lusitana} from 'next/font/google'; //global yazı tipi

export const inter = Inter({ subsets: ['latin'] }); // ayrıca kullanılabilecek yazı tipi
export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin'],
});