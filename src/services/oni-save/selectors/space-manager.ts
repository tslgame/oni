import { createSelector } from "reselect";
import { find } from "lodash-es";
import { getBehavior, SpacecraftManagerBehavior } from "oni-save-parser";

import { createServiceSelector } from "./utils";
import { saveGameSelector } from "./save-game";

export const spaceManagerSelector = createServiceSelector(
  createSelector(
    saveGameSelector.local,
    saveGame => {
      if (!saveGame) {
        return null;
      }

      const saveGameGroup = find(
        saveGame.gameObjects,
        x => x.name === "SaveGame"
      );
      if (!saveGameGroup) {
        return null;
      }

      const saveGameObject = saveGameGroup.gameObjects[0];
      if (!saveGameObject) {
        return null;
      }

      const spaceBehavior = getBehavior(
        saveGameObject,
        SpacecraftManagerBehavior
      );
      if (!spaceBehavior) {
        return null;
      }

      return spaceBehavior.templateData;
    }
  )
);
