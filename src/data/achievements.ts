import { FeaturedAchievement, AchievementPhoto } from '../types';

export const prayogamPhotos: AchievementPhoto[] = [
  {
    id: 'prayogam-main-stage',
    url: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.22.27_PM__2__47426bec.jpeg',
    title: 'Auditorium Felicitation Ceremony',
    caption: 'Award Ceremony',
    altText: 'Wide view of the Poornima University auditorium stage during Prayogam 2026 prize distribution ceremony with faculty, student recipients, dignitaries, and hardware robot prototype on display.',
    aspectRatio: '4/3',
  },
  {
    id: 'prayogam-stage-1',
    url: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.22.28_PM__1__19f4040d.jpeg',
    title: 'Student Innovation Felicitation',
    caption: 'Student Recognition',
    altText: 'Faculty members presenting memento trophy and certificate to student project innovator at Prayogam 2026 stage.',
    aspectRatio: '4/3',
  },
  {
    id: 'prayogam-stage-2',
    url: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.22.28_PM_7bee69ff.jpeg',
    title: 'University Honors Presentation',
    caption: 'Celebrating Innovation',
    altText: 'University leadership and jury presenting the recognition award to student engineering innovator on stage.',
    aspectRatio: '4/3',
  },
  {
    id: 'prayogam-stage-3',
    url: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.22.27_PM_bceceb9b.jpeg',
    title: 'Project Recognition Ceremony',
    caption: 'Moments of Achievement',
    altText: 'Student recipient receiving commendation and trophy at the Prayogam 2K26 celebration dais.',
    aspectRatio: '4/3',
  },
  {
    id: 'prayogam-stage-4',
    url: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.22.27_PM__3__c0842f5b.jpeg',
    title: 'Engineering Milestone Award',
    caption: 'Award Ceremony',
    altText: 'Prize distribution ceremony recognizing practical engineering and robotics project contributions.',
    aspectRatio: '4/3',
  },
  {
    id: 'prayogam-stage-5',
    url: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.22.27_PM__1__899a79ab.jpeg',
    title: 'Dais Felicitation Moment',
    caption: 'Student Recognition',
    altText: 'Jury and dignitaries felicitating student team member during the annual project exhibition ceremony.',
    aspectRatio: '4/3',
  },
  {
    id: 'prayogam-stage-6',
    url: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.22.26_PM_a8835699.jpeg',
    title: 'Exhibition Felicitation',
    caption: 'Celebrating Innovation',
    altText: 'Honoring student technology initiatives and hands-on hardware development at Poornima University.',
    aspectRatio: '4/3',
  },
];

export const featuredAchievement: FeaturedAchievement = {
  id: 'prayogam-2026',
  title: 'PRAYOGAM 2026',
  subtitle: 'Innovation • Technology • Student Excellence',
  description:
    'Showcasing an exciting milestone from Prayogam 2026 at Poornima University, celebrating student innovation, engineering projects, and technological creativity.',
  edition: 'Prayogam 2026',
  institution: 'Poornima University',
  location: 'Jaipur, Rajasthan',
  keyStats: [
    { label: 'Exhibition', value: 'Prayogam 2026' },
    { label: 'Institution', value: 'Poornima University' },
    { label: 'Focus', value: 'IoT & Robotics' },
    { label: 'Recognition', value: 'University Honors' },
  ],
  photos: prayogamPhotos,
  videoUrl:
    '/assets/aistudio/Started_with_curiosity__ended_with_recognition___Grateful_for_this_GDG_Felicitation_2026_moment_6d1eb1d3.mp4',
  videoTitle: 'Grateful for this GDG Felicitation 2026 moment',
};
