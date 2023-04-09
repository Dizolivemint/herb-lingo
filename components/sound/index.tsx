import { useState, useEffect } from 'react';
import { Howl } from 'howler';

type Props = {
  word: string;
  audioFile: string;
};

export default function WordWithAudio({ word, audioFile }: Props) {
  const [sound, setSound] = useState<Howl | null>(null);
  const audioSrc = `/sounds/${audioFile}.mp3`;

  useEffect(() => {
    const sound = new Howl({
      src: audioSrc,
    });
    sound.play();
    return () => {
      sound.stop();
    };
  }, [audioSrc]);

  const handlePlayClick = () => {
    if (sound) {
      sound.stop();
      sound.play();
    } else {
      const sound = new Howl({
        src: audioSrc,
      });
      sound.play();
      setSound(sound);
    }
  };

  return (
    <div>
      <h2>{word}</h2>
      <button onClick={handlePlayClick}>
        <SpeakerIcon />
      </button>
    </div>
  );
}

type SpeakerIconProps = {
  size?: number;
  color?: string;
};

const SpeakerIcon: React.FC<SpeakerIconProps> = ({ size = 24, color = '#000' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path fill={color} transform="rotate(180 12 12)" d="M9.375 4.05v16.8a.6.6 0 0 0 1.032.4L16.2 16.2H21a.6.6 0 0 0 .6-.6V9.6a.6.6 0 0 0-.6-.6h-4.8L10.407 3.65a.6.6 0 0 0-.032-.028.6.6 0 0 0-.157-.073.6.6 0 0 0-.124-.014h-.069a.6.6 0 0 0-.185.029.6.6 0 0 0-.151.09L9.375 4.05z" />
  </svg>
);