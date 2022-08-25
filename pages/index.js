import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axeu from '../assets/axe1.jpg'
import axed from '../assets/axe2.jpg'
import pu from '../assets/pu.jpg'
import pd from '../assets/pd.jpg'
import pt from '../assets/pt.jpg'
import pq from '../assets/pq.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className='w-full h-16 py-3 flex items-center justify-between border-b-2 '>
      <h1 className='text-3xl font-bold text-base'>Echo</h1>
      <div className='flex items-center justify-start'>
        <div className='p-2 text-lg font-medium rounded-sm cursor-pointer hover:bg-gray-100'>Services & solutions</div>
        <div className='p-2 text-lg font-medium rounded-sm cursor-pointer hover:bg-gray-100 mx-2'>Valeurs</div>
        <div className='p-2 text-lg font-medium rounded-sm cursor-pointer hover:bg-gray-100 mx-2'>Partenaires</div>
        <div className='p-2 text-lg font-medium rounded-sm cursor-pointer hover:bg-gray-100 mx-2'>Contacts</div>
      </div>
      </div>

      <div className='w-full h-[110vh] flex flex-col items-center justify-center mt-12'>
        <div className='text-6xl text-center font-semibold w-[68%]'>Garantir votre securite, rendre meilleurs vos evenements.</div>
        <div className='text-2xl text-center mt-10 w-[32%]'>Nous mettons a votre disposition des outils et services pour le faire.</div>
      <div className='w-full mt-24 flex items-center justify-start'>
        <div className='w-[280px] h-[300px] relative mx-6 transform rotate-[-3deg]'>
        <Image src={pu} alt={"psalm"} objectFit="cover" layout='fill' className='rounded-lg'/>
        </div>
        <div className='w-[280px] h-[300px] relative mx-6 transform  rotate-[5deg]'>
        <Image src={pd} alt={"psalm"} objectFit="cover" layout='fill' className='rounded-lg'/>
        </div>
        <div className='w-[280px] h-[300px] relative mx-6 transform rotate-[-5deg]'>
        <Image src={pt} alt={"psalm"} objectFit="cover" layout='fill' className='rounded-lg'/>
        </div>
        <div className='w-[280px] h-[300px] relative mx-6 transform  rotate-[4deg]'>
        <Image src={pq} alt={"psalm"} objectFit="cover" layout='fill' className='rounded-lg'/>
        </div>
      </div>
      </div>

    <h2 className='text-5xl text-slate-800 font-semibold text-center my-28'>Decouvrez nos differents axes de services</h2>

  <div className='w-full flex items-center justify-start my-20'>
    <div className='w-[444px] h-[320px] relative mx-16'>
    <div className='w-[444px] h-[320px] bg-sky-400 absolute rotate-[4deg] rounded-lg'></div>
    <Image src={axeu} alt={"psalm"} objectFit="cover" layout='fill' className='rounded-lg'/>
    </div>
    <div className='flex flex-col items-start justify-start'>
    <h5 className='inline-flex text-lg font-semibold text-sky-500 my-[8px]'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.563 9.75a12.014 12.014 0 00-3.427 5.136L9 12.75m3-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
</svg>

       La securite</h5>
      <h2 className='text-4xl font-bold text-slate-900 leading-normal w-[632px] my-[3px]'>Parce que vous meritez plus qu'une securite optimale.</h2>
      <p className='text-lg leading-7 font-regular text-slate-600 w-[632px] my-[16px]'>There's a lot to a typical interview process, from recruiter calls and emails to design challenges and take-home exercises (which we're not fans of). Understanding the importance of story-telling and self-awareness are key. But where do you start? What makes for an exceptional interview? Shape can help you uncover answers.</p>
    </div>
    
  </div>

  <div className='w-full flex items-start justify-start my-40'>
    <div className='flex flex-col items-start justify-start mx-16'>
    <h5 className='inline-flex text-lg font-semibold text-red-500 my-[8px]'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
</svg>



       L'evenementiel</h5>
      <h2 className='text-4xl font-bold text-slate-900 leading-normal w-[632px] my-[8px]'>Donnez de l'echo a vos evenements.</h2>
      <p className='text-lg leading-7 font-regular text-slate-600 w-[632px] my-[16px]'>There's a lot to a typical interview process, from recruiter calls and emails to design challenges and take-home exercises (which we're not fans of). Understanding the importance of story-telling and self-awareness are key. But where do you start? What makes for an exceptional interview? Shape can help you uncover answers.</p>
    </div>

    <div className='w-[444px] h-[320px] relative'>
    <div className='w-[444px] h-[320px] bg-red-600 absolute rotate-[4deg] rounded-lg'></div>
    <Image src={axed} alt={"psalm"} objectFit="cover" layout='fill' className='rounded-lg'/>
    </div>
    
  </div>

  <h2 className='leading-snug text-4xl text-slate-800 font-medium mx-16 my-28 w-[572px] max-w-[680px]'>Nous vous offrons les solutions les plus viables.</h2>
  <h2 className='leading-snug text-5xl text-slate-800 font-medium mx-auto my-16  w-[80%] text-center'>Notre professionalisme est basee sur des valeurs qui nous caracterisent le plus.</h2>
  <div className='flex items-center justify-center my-20'>

    <div className='flex flex-col items-center justify-center w-[316px] h-[288px] p-2'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto w-20 h-20 mb-6 text-red-600">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>

    <h2 className='text-2xl font-bold text-slate-800 my-2 text-left'>Le respect.</h2>
    <p className='text-base font-regular text-slate-600 my-2 text-center'>Prepare for your next interview right now and before you need it.
Learn with as much or as little time commitment as you need for the interviewing goals you have.</p>


    </div>

    <div className='flex flex-col items-center justify-center w-[316px] mx-28 h-[288px] p-2'>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto w-20 h-20 mb-6 text-sky-400">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
</svg>


    <h2 className='text-2xl font-bold text-slate-800 my-2 text-left'>La rapidité.</h2>
    <p className='text-base font-regular text-slate-600 my-2 text-center'>Prepare for your next interview right now and before you need it.
Learn with as much or as little time commitment as you need for the interviewing goals you have.</p>


    </div>

    <div className='flex flex-col items-center justify-center w-[316px] h-[288px] p-2'>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto w-20 h-20 mb-6 text-green-400">
  <path fillRule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z" clipRule="evenodd" />
</svg>


    <h2 className='text-2xl font-bold text-slate-800 my-2 text-left'>La flexibilité</h2>
    <p className='text-base font-regular text-slate-600 my-2 text-center'>Prepare for your next interview right now and before you need it.
Learn with as much or as little time commitment as you need for the interviewing goals you have.</p>


    </div>

  </div>

<div className='flex items-center justify-start w-4/5 mx-16  bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-lg my-32'>
<div className='flex flex-col items-start justify-start'>
<h1 className='text-5xl font-bold text-white w-[64%]'>Pret a vous lancer avec nous ?</h1>
  <p className='text-xl font-regular text-cyan-100 w-[52%] my-6'>Faite nous confiance pour vos projets, et beneficiez des meilleursoffres du secteur.</p>
</div>

<div className='cursor-pointer p-4 bg-slate-50 text-lg font-semibold text-blue-600 rounded-xl'>Commencons</div>
</div>

<h2 className='leading-snug text-4xl text-slate-800 font-medium mx-16 mt-16 mb-8 w-[572px] max-w-[680px]'>Vous avez des questions sur nos differentes offres ?</h2>
<div className='inline-flex'>
<div className='flex flex-col items-start justify-start mx-16'>
  <div className='inline-flex text-sky-500 font-semibold text-lg'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 mt-[2px] w-6 h-6">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
</svg>
Contactez-nous des maintenant 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 mt-[2px] w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
</svg>


</div>
<div className=' ml-8 my-6 flex items-start justify-start  font-semibold text-lg text-slate-600'>
  655637254 - 677607428
</div>
</div>

<div className='flex flex-col items-start justify-start mx-16'>
  <div className='inline-flex text-sky-500 font-semibold text-lg'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 mt-[2px] w-6 h-6">
  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
</svg>

Adressez vous directement a nous. 

</div>
<div className=' ml-8 my-6 flex items-start justify-start  font-semibold text-lg text-slate-600'>
  Lun-Sam, 8h-18h - Hopital de Bonamoussadi, Douala-Cameroun.
</div>
</div>

</div>

<div className='border-t-2 border-gray-200 mt-12 mb-4 flex flex-col items-start justify-start py-4'>
<h1 className='text-3xl font-bold text-base'>Echo</h1>
<div className='w-[60%] flex items-start justify-between'>
<ul className="list-none my-10">
  <li className='text-lg font-semibold text-sltae-500 cursor-pointer p-1'>Nos dossiers</li>
  <li className='text-lg font-semibold text-sltae-500 cursor-pointer p-1'>Evenements</li>
  <li className='text-lg font-semibold text-sltae-500 cursor-pointer p-1'>Partenaires</li>
</ul>

<ul className="list-none my-10">
  <li className='text-lg font-semibold text-sltae-500 cursor-pointer p-1'>Diaporamas</li>
  <li className='text-lg font-semibold text-sltae-500 cursor-pointer p-1'>Aide et contacts</li>
  <li className='text-lg font-semibold text-sltae-500 cursor-pointer p-1'>Mentions legales</li>
</ul>

<ul className="list-none my-10">
  <li className='text-lg font-semibold text-sltae-500 cursor-pointer p-1'>Confidentialite</li>
  <li className='text-lg font-semibold text-sltae-500 cursor-pointer p-1'>Conditions d'utilisation</li>
</ul>
</div>
<div className='mx-auto text-base text-slate-500 font-medium mt-6'>
Copyright © 2022 Echo Security & Events. All rights reserved.
</div>
</div>
    </div>
  )
}
