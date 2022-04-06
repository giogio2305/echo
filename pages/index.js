import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyImage from './composant/MyImage'
import de from "./assets/video.jpg"
import dea from "./assets/video.jpg"
import deb from "./assets/video.jpg"
import fvi from "./assets/speedometer.png"
import svi from "./assets/spring.png"
import tvi from "./assets/trust.png"
import fsi from "./assets/shield.png"
import ssi from "./assets/festival.png"
import fb from "./assets/facebook.png"
import ins from "./assets/instagram.png"
import twi from "./assets/twitter.png"
import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils'

export default function Home() {
  const tim = [
    {
      name: de
    },
    {
      name: dea
    },
    {
      name: deb
    },
  ]
  return (
 <div>
   {/* Nav bar */}
 <div class="navbar bg-base-100 shadow-lg min-w-screen rounded">
  <div class="flex-1">
    <a class="btn btn-ghost hover:bg-transparent normal-case text-xl">echo</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a href='#val'>Nos valeurs</a></li>
      <li><a href='#ser'>Services</a></li>
      <li><a href='#par'>Partenaires</a></li>
      <li><a href='#con'>Contacts</a></li>
    </ul>
  </div>
</div>


{/* Hero section */}
<div className='mt-[5rem] mb-[7rem] mx-12 '>
  <div className='flex items-center justify-between'>
    {/* hero text */}
    <div className='flex flex-col items-start justify-center'>
      <h1 className='text-6xl font-bold max-w-[604px] tracking-normal'>Pour votre protection et vos evenements</h1>
      <p className='text-xl font-regular max-w-[400px] tracking-normal mt-8'>
        Nous vous offrons le meilleurs de nos services a travers nos differents forfaits.
      </p>
    </div>

    {/* hero image */}
    <div className='w-[490px] h-96 bg-gray-600 rounded-lg'></div>
  </div>
</div>
{/* Section valeurs */}
<div id="val" class="mt-[7rem] mx-12 ">
  <div  class="mt-6  flex flex-col items-start justify-start">
    <p class="text-left text-4xl my-4">Nos valeurs</p>
    </div>
  <div class="grid grid-cols-3 gap-3 mt-9 flex items-stretch">
{/* Rapidite */}
   <div className='flex flex-col items-start justify-start'>
     <Image src={fvi} width={52} height={52} />
     <p class="text-transparent bg-clip-text bg-gradient-to-br from-[#CA7F97] to-[#FC914D] text-left text-xl font-bold mb-4 mt-5">La Rapidité</p>
   <p className='text-sm max-w-[360px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
   </div>

{/* Flexibilite */}
  <div  className='flex flex-col items-start justify-start'>
    <Image src={svi} width={52} height={52} />
     <p class="text-transparent bg-clip-text bg-gradient-to-br from-[#2589D0] to-[#32BDEF] text-left text-xl font-bold mb-4 mt-5">La Flexibilité</p>
   <p className='text-sm max-w-[360px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
      </p>
  </div>

  <div className='flex flex-col items-start justify-start'>
    <Image src={tvi} width={52} height={52} />
     <p class="text-transparent bg-clip-text bg-gradient-to-br from-[#E52030] to-[#F44F5A] text-left text-xl font-bold mb-4 mt-5">Le Respect</p>
   <p className='text-sm max-w-[360px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
      </p>
  </div>


  </div>
</div>



{/* Section Services */}
<div id="ser"  class="mt-[7rem] mx-12">
  <div class="flex flex-col items-start justify-start mt-[7rem] ">
    <p class="text-3xl my-4">Nos services</p>
    </div>

{/* Gardiennage */}
  <div class="flex items-start justify-center mx-[47px] my-20  px-[16px]">
  <div class="mr-12">
      <Image src={de}  width={580} height={340}/>
  </div>

   <div class="">
     <div className='flex items-start justify-start'>
       <Image src={fsi} width={24} height={24} />
       <p class="text-left text-base mb-3 ml-2">Gardiennage</p></div>
     <p class="text-left text-4xl mb-4">Assurez votre securite</p>
   <p className='max-w-[500px] max-h-[340px]'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
   </div>
  </div>
  

{/* Evenementiel */}
<div class="flex items-start justify-center mx-[47px] my-32  px-[16px]">
<div class="">
<div className='flex items-start justify-start'>
       <Image src={ssi} width={24} height={24} />
       <p class="text-left text-base mb-3 ml-2">Evenementiel</p></div>
  <p class="text-left text-4xl mb-4 max-w-[560px]">Fournir l'equipement sonore necessaire pour vos evenements</p>
<p className='max-w-[500px] max-h-[340px]'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
  à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
  le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
   Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
</div>

<div class="ml-12">
   <Image src={de}  width={520} height={360}/>
</div>
</div>


</div>

{/* Section partenaires */}
<div id="par" class="mt-[7rem] mx-12">
<div class="flex flex-col items-start justify-start mt-[7rem] ">
    <p class="text-3xl my-4">Nos partenaires</p>
    </div>
    <div class="grid grid-cols-4 gap-4 my-12 mx-8">
  <div className='w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>01</div>

  <div className='w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>02</div>

  <div className='w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>03</div>

  <div className='w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>04</div>

  <div className='w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>05</div>

<div className='w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>06</div>

<div className='w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>07</div>

<div className='w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>08</div>

</div>
</div>

{/* Section contacts */}
<div id="con" class="mt-[7rem] mx-12">
<div class="flex flex-col items-start justify-start mt-[7rem] ">
    <p class="text-3xl my-4">Contactez-nous</p>
    </div>

    <div class="grid grid-cols-3 gap-3 my-3 flex items-stretch">
{/* social */}
   <div className='flex flex-col items-start justify-start'>
     <p class="text-transparent bg-clip-text bg-gradient-to-br from-[#2589D0] to-[#32BDEF] text-left text-xl font-bold mb-4 mt-5">Social</p>
<div className='flex items-center justify-start'>
  <Image src={fb} width={44} height={44} />
  <Image src={ins} width={44} height={44}/>
  <Image src={twi} width={44} height={44}/>
</div>
   </div>

{/* telephone */}
  <div className='flex flex-col items-start justify-start'>
     <p class="text-transparent bg-clip-text bg-gradient-to-br from-[#2589D0] to-[#32BDEF] text-left text-xl font-bold mb-4 mt-5">Telephone</p>
     <div className='flex items-center justify-start'>
<h3 className='text-lg font-bold'>698004578</h3>
</div>
  </div>

  <div className='flex flex-col items-start justify-start'>
     <p class="text-transparent bg-clip-text bg-gradient-to-br from-[#2589D0] to-[#32BDEF] text-left text-xl font-bold mb-4 mt-5">E-mail</p>
     <div className='flex items-center justify-start'>
     <h3 className='text-lg font-bold'>someadress@xyz.com</h3>
</div>
  </div>


  </div>

</div>


 </div>
 
  )
}
