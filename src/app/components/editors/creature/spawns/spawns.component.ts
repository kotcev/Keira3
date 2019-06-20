import { Component } from '@angular/core';

import { MultiRowEditorComponent } from '../../shared/multi-row-editor.component';
import { CreatureHandlerService } from '../../../../services/handlers/creature-handler.service';
import { Spawns } from '../../../../types/spawns.type';
import { SpawnsService } from '../../../../services/editors/creature/spawns.service';
import { MOVEMENT_TYPE } from '../../../../constants/options/movement-type';
import { NPC_FLAGS } from '../../../../constants/flags/npc-flags';
import { UNIT_FLAGS } from '../../../../constants/flags/unit-flags';
import { DYNAMIC_FLAGS } from '../../../../constants/flags/dynamic-flags';
import { SPAWN_MASK } from '../../../../constants/flags/spawn-mask';

@Component({
  selector: 'app-spawns',
  templateUrl: './spawns.component.html',
  styleUrls: ['./spawns.component.scss']
})
export class SpawnsComponent extends MultiRowEditorComponent<Spawns> {

  public readonly UNIT_FLAGS = UNIT_FLAGS;
  public readonly MOVEMENT_TYPE = MOVEMENT_TYPE;
  public readonly NPC_FLAGS = NPC_FLAGS;
  public readonly DYNAMIC_FLAGS = DYNAMIC_FLAGS;
  public readonly SPAWN_MASK = SPAWN_MASK;

  constructor(
    public editorService: SpawnsService,
    public handlerService: CreatureHandlerService,
  ) {
    super(editorService, handlerService);
  }
}

