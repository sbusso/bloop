import React, { useCallback, useState } from 'react';
import LocalReposStep from '../../../../pages/Home/Onboarding/LocalReposStep';
import GithubReposStep from '../../../../pages/Home/Onboarding/GithubReposStep';
import FolderSelectStep from '../../../../pages/Home/Onboarding/FolderSelectStep';
import SeparateOnboardingStep from '../../../SeparateOnboardingStep';

type Props = {
  addRepos: null | 'local' | 'github';
  onClose: (submitted: boolean) => void;
};

const AddRepos = ({ addRepos, onClose }: Props) => {
  const [isFolderChosen, setFolderChosen] = useState(false);
  const onFolderChosen = useCallback(() => {
    setFolderChosen(true);
  }, []);
  const handleClose = () => {
    setFolderChosen(false);
    onClose(false);
  };
  const handleSubmit = () => {
    onClose(true);
  };
  return (
    <SeparateOnboardingStep isVisible={!!addRepos} onClose={handleClose}>
      {addRepos === 'local' ? (
        isFolderChosen ? (
          <LocalReposStep handleNext={handleSubmit} />
        ) : (
          <FolderSelectStep handleNext={onFolderChosen} />
        )
      ) : (
        <GithubReposStep handleNext={handleSubmit} disableSkip />
      )}
    </SeparateOnboardingStep>
  );
};

export default AddRepos;
