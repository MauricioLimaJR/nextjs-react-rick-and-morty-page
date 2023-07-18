import Image from 'next/image';
import styles from './CharacterCard.module.css';

export interface ICharacterCard {
  name: string;
  specie: string;
}

const CharacterCard: React.FC<ICharacterCard> = ({ name, specie }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>
            {specie}
          </span>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
