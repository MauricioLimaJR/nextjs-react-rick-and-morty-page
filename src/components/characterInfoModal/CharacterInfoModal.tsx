import { ICharacter } from '@/domain/models/ICharacter';
import { Box, Modal } from '@mui/material';
import CharacterInfo from './CharacterInfo';

interface ICharacterInfoModal {
  character: ICharacter;
  isOpen: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const CharacterInfoModal: React.FC<ICharacterInfoModal> = (props) => {
  return (
    <Modal open={props.isOpen} onClose={props.onClose}>
      <Box sx={style}>
        <CharacterInfo character={props.character} />
      </Box>
    </Modal>
  );
};

export default CharacterInfoModal;
