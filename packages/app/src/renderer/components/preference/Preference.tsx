import * as React from "react";
import { Header, Modal, Button, Input, Icon, Tab } from "semantic-ui-react";
import Basic from "./Basic";
import Advanced from "./Advanced";
import Preference from "../../store/Preference";

interface IPreference {
  open: boolean;
  preference: Preference;
  close: () => void;
  browseCertPath: () => void;
  browseKeyPath: () => void;
  browseAssetPath: () => void;
}

const PreferenceModal = ({
  open,
  close,
  preference,
  browseCertPath,
  browseKeyPath,
  browseAssetPath
}: IPreference) => {
  const panes = [
    {
      menuItem: "Basic",
      render: () =>
        <Tab.Pane attached={false}>
          <Basic preference={preference} browseAssetPath={browseAssetPath} />
        </Tab.Pane>
    },
    {
      menuItem: "Advanced",
      render: () =>
        <Tab.Pane attached={false}>
          <Advanced
            preference={preference}
            browseCertPath={browseCertPath}
            browseKeyPath={browseKeyPath}
          />
        </Tab.Pane>
    }
  ];

  return (
    <Modal open={open}>
      <Modal.Header>Project Preference</Modal.Header>
      <Modal.Content>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Modal.Content>
      <Modal.Actions>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Done"
          onClick={close}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default PreferenceModal;