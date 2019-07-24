import * as React from "react";
import {
  MinionSkillGroupNames,
  MinionResumeBehavior,
  getHashedString,
  HashedString
} from "oni-save-parser";
import { findIndex, find, difference } from "lodash-es";

import { WithTranslation, withTranslation } from "react-i18next";

import {
  Theme,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import AbstractBehaviorEditor from "@/services/oni-save/components/AbstractBehaviorEditor";

import AddAptitudeButton from "./components/AddAptitudeButton";

const ResumeEditor = AbstractBehaviorEditor.ofType(MinionResumeBehavior);

export interface InterestsProps {
  gameObjectId: number;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    },
    chip: {
      margin: theme.spacing.unit / 2
    }
  });

type Props = InterestsProps & WithStyles<typeof styles> & WithTranslation;

const Interests: React.FC<Props> = ({ classes, gameObjectId, t }) => {
  return (
    <ResumeEditor gameObjectId={gameObjectId}>
      {({ templateData: { AptitudeBySkillGroup }, onTemplateDataModify }) => {
        const availableAptitudes = MinionSkillGroupNames.filter(
          aptitudeName =>
            aptitudeValue(AptitudeBySkillGroup, aptitudeName) === 0
        );

        const selectedAptitudes = difference(
          MinionSkillGroupNames,
          availableAptitudes
        );

        function removeAptitude(aptitudeName: string) {
          const hashStr = getHashedString(aptitudeName);
          const index = findIndex(
            AptitudeBySkillGroup,
            x => x[0].hash === hashStr.hash
          );
          if (index === -1) {
            return;
          }
          onTemplateDataModify({
            AptitudeBySkillGroup: [
              ...AptitudeBySkillGroup.slice(0, index),
              ...AptitudeBySkillGroup.slice(index + 1)
            ]
          });
        }

        function addAptitude(aptitudeName: string) {
          const hashStr = getHashedString(aptitudeName);
          const index = findIndex(
            AptitudeBySkillGroup,
            x => x[0].hash === hashStr.hash
          );
          if (index === -1) {
            onTemplateDataModify({
              AptitudeBySkillGroup: [...AptitudeBySkillGroup, [hashStr, 1]]
            });
          } else {
            onTemplateDataModify({
              AptitudeBySkillGroup: [
                ...AptitudeBySkillGroup.slice(0, index),
                [hashStr, 1],
                ...AptitudeBySkillGroup.slice(index + 1)
              ]
            });
          }
        }

        return (
          <div className={classes.root}>
            {selectedAptitudes.map((aptitudeName, i) => (
              <Chip
                key={i}
                className={classes.chip}
                label={t(`oni:todo-trans.aptitudes.${aptitudeName}`, {
                  defaultValue: aptitudeName
                })}
                onDelete={removeAptitude.bind(null, aptitudeName)}
              />
            ))}
            <AddAptitudeButton
              className={classes.chip}
              availableAptitudes={availableAptitudes}
              onAddAptitude={aptitudeName => addAptitude(aptitudeName)}
            />
          </div>
        );
      }}
    </ResumeEditor>
  );
};

export default withStyles(styles)(withTranslation()(Interests));

function aptitudeValue(
  aptitudes: [HashedString, number][],
  aptitudeName: string
): number {
  const hash = getHashedString(aptitudeName).hash;
  const aptitude = find(aptitudes, x => x[0].hash === hash);
  if (!aptitude) {
    return 0;
  }
  return aptitude[1];
}
