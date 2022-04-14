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
 <div className="navbar bg-base-100 shadow-lg min-w-screen rounded">
  <div className="flex-1">
    <a className="btn btn-ghost hover:bg-transparent normal-case text-xl">echo</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a href='#val'>Nos valeurs</a></li>
      <li><a href='#ser'>Services</a></li>
      <li><a href='#par'>Partenaires</a></li>
      <li><a href='#con'>Contacts</a></li>
    </ul>
  </div>
</div>

<main className=" flex-grow ">
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



{/* Section Services */}
<div id="ser"  className="mt-[7rem] mx-6">
  <div className="flex flex-col items-center justify-center mt-[7rem] ">
    <p className="text-center text-4xl my-5">Decouvrez nos services</p>
    <hr className='w-24 h-[3px] rounded bg-gray-300 mt-4 mb-6'/>
    </div>

<div className='grid grid-cols-3 gap-3 my-8 '>

<div className='flex items-center justify-center h-[164px] w-[360px]    py-2  '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Gardiennage</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>

<div className='flex items-center justify-center h-[164px] w-[360px]     py-2 '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Securite physique</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
     </p>
     </div>
</div>

<div className='flex items-center justify-center h-[164px] w-[360px]  py-2  '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Techniques operationnelles</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>


<div className='flex items-center justify-center h-[164px] w-[360px]    py-2'>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Conseils et strategies</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>



<div className='flex items-center justify-center h-[164px] w-[360px]    py-2  '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Audit de securite</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>

<div className='flex items-center justify-center h-[164px] w-[360px]    py-2 '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Videosurveillance</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>

<div className='flex items-center justify-center h-[164px] w-[360px]    py-2  '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Fanfare</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>

<div className='flex items-center justify-center h-[164px] w-[360px]    py-2 '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Orchestres</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>

<div className='flex items-center justify-center h-[164px] w-[360px]    py-2 '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Hotesses</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>

<div className='flex items-center justify-center h-[164px] w-[360px]    py-2 '>
<div className='flex items-center justify-center h-16 w-16 rounded-full  bg-gray-500 mx-2'>
<Image alt='img' src={fsi} width={32} height={32} />
</div>
<div className='flex flex-col items-center justify-center max-h-40 max-w-[280px] rounded  bg-gray-600 p-4'>
<p className="text-xl my-2 text-left">Eclairage solaire</p>
<p className='text-[10px] text-left'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
</div>
</div>

</div>


</div>


{/* Section valeurs */}
<div id="val" className="mt-[7rem] mx-12 ">
  <div  className="  flex flex-col items-center justify-center">
    <p className="text-left text-4xl my-5">Nos valeurs</p>
    <hr className='w-24 h-[2.6px] rounded bg-gray-300 mt-4 mb-6'/>
    </div>
  <div className="grid grid-cols-3 gap-3 mt-9 flex items-stretch">
{/* Rapidite */}
   <div className='flex flex-col items-center justify-center'>
   <div className='flex items-center justify-center h-24 w-24 rounded-full  bg-gray-800 mx-2'>
     <Image alt='img' src={fvi} width={52} height={52} />
     </div>
     <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#CA7F97] to-[#FC914D] text-left text-xl font-bold mb-4 mt-5">La Rapidité</p>
     <hr className='bg-gradient-to-br from-[#CA7F97] to-[#FC914D] w-16 h-[3px] rounded-lg bg-gray-300 border-none  mb-6'/>
   <p className='text-sm max-w-[300px] text-center'>Le  texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      </p>
      <button class=" my-5 bg-gray-800 hover:bg-gray-900 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
  <span>En savoir</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
</button>
   </div>

{/* Flexibilite */}
  <div  className='flex flex-col items-center justify-center'>
  <div className='flex items-center justify-center h-24 w-24 rounded-full  bg-gray-800 mx-2'>
  <Image alt='img' src={svi} width={52} height={52} />
  </div>
    
     <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#2589D0] to-[#32BDEF] text-left text-xl font-bold mb-3 mt-5">La Flexibilité</p>
     <hr className='bg-gradient-to-br from-[#2589D0] to-[#32bDEF] w-16 h-[3px] rounded-lg bg-gray-300 border-none  mb-6'/>
   <p className='text-sm max-w-[300px] text-center'>Le  texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      </p>
      <button class=" my-5 bg-gray-800 hover:bg-gray-900 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
  <span>En savoir</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
</button>
  </div>

  <div className='flex flex-col items-center justify-center'>
  <div className='flex items-center justify-center h-24 w-24 rounded-full  bg-gray-800 mx-2'>
    <Image alt='img' src={tvi} width={52} height={52} />
    </div>
     <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#E52030] to-[#F44F5A] text-left text-xl font-bold mb-4 mt-5">Le Respect</p>
     <hr className='bg-gradient-to-br from-[#E52030] to-[#F44F5A] w-16 h-[3px] rounded-lg bg-gray-300 border-none  mb-6'/>
   <p className='text-sm max-w-[300px] text-center'>Le  texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      </p>
      <button class=" my-5 bg-gray-800 hover:bg-gray-900 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
  <span>En savoir</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 mt-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
</button>
  </div>


  </div>
</div>


{/* Section partenaires */}
<div id="par" className="mt-[7rem] mx-12">
<div className="flex flex-col items-center justify-center mt-[7rem] ">
    <p className="text-4xl my-4">Ils nous font confiance</p>
    <hr className='w-24 h-[3px] rounded bg-gray-300 mt-4 mb-6'/>
    </div>
    <div className='flex flex-col items-center justify-center'>
    <p className='text-sm max-w-[380px] text-center my-5'>
    De nombreuses entreprises et institutions nous accordent leur confiance pour les accompagner. Ainsi notre expertise et notre savoir-faire maintiennent cette confiance.
      </p>


      <div className="grid grid-cols-4 gap-4 my-12 mx-8">
  <div className='m-2 w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>01</div>

  <div className='m-2 w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>02</div>

  <div className='m-2 w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>03</div>

  <div className='m-2 w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>04</div>

  <div className='m-2 w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>05</div>

<div className='m-2 w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>06</div>

<div className='m-2 w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>07</div>

<div className='m-2 w-[96px] h-[96px] bg-gray-500 rounded-lg flex items-center justify-center'>08</div>

</div>
    </div>
    

</div>


</main>

<footer className='flex flex-col mx-auto bg-gray-800 px-8 pt-12 pb-4  mt-16'>
<div className="grid grid-cols-5 gap-5">

<div className='flex flex-col items-start justify-start'>
<h4 className='text-base font-bold my-2 uppercase'>A PROPOS</h4>

<p className='text-xs max-w-[212px] my-1'>
Entreprise du groupe ICCNET, créée en 1997, MATRIX TELECOMS est un opérateur Réseaux et Télécoms disposant d'une infrastructure de pointe pour tout type de besoins en solutions de télécommunications.
</p>



</div>

<div className='flex flex-col items-start justify-start'>
<h4 className='text-base font-bold my-2 uppercase'>Telephone</h4>

<h3 className='text-sm font-bold'>(+237) 699271326</h3>
<h3 className='text-sm font-bold'>(+237) 673696435</h3>

</div>

<div className='flex flex-col items-start justify-start'>
<h4 className='text-base font-bold my-2 uppercase'>Email</h4>

<h3 className='text-sm font-bold'>info@echosecurity-events.com</h3>
<h3 className='text-sm font-bold'>e.securite.events@gmail.com</h3>

</div>

<div className='flex flex-col items-start justify-start'>
<h4 className='text-base font-bold my-2 uppercase'>social</h4>
<div className='flex items-center justify-start my-1'>
  <Image alt='img' src={fb} width={28} height={28}/>
  <h3 className='text-sm font-bold ml-2'>echosecurityevents</h3>
</div>

</div>

<div className='flex flex-col items-start justify-start'>
<h4 className='text-base font-bold my-2 uppercase'>Adresse</h4>

<h3 className='text-sm font-bold'>Hopital public, Bonamoussadi  Douala-Cameroun</h3>

</div>

</div>
<hr className='w-full h-[3px] rounded bg-gray-300 my-4'/>

<div className='flex items-center justify-between'>
  <p className='text-sm font-semibold'>Copyright © 2022 ECHO SECURITY EVENTS</p>
  <p className='text-sm font-semibold'>Powered by : <a  href='#' className='underline'>Signer Ink</a></p>
</div>
</footer>

 </div>
 
  )
}
