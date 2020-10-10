#pragma once

#include "types.h"

#include <variant>

namespace rts {

  namespace command {
    struct BuildPrototype {
      UnitTypeId unitType;
    };

    struct Cancel {};

    struct ControlGroup {
      enum Action { Select, Set, Add } action;
      bool exclusive;
      ControlGroupId group;
    };

    struct Selection {
      enum Action { Set, Add, Remove } action;
      UnitIdList units;
    };

    struct SelectionSubgroup {
      enum Action { Next, Previous } action;
    };

    struct TriggerAbility {
      AbilityInstanceIndex abilityIndex;
      Point target;
    };

    struct TriggerDefaultAbility {
      Point target;
    };

    struct Debug {
      enum Action { Destroy } action;
    };
  }

  using Command = std::variant<
      command::BuildPrototype,
      command::Cancel,
      command::ControlGroup,
      command::Selection,
      command::SelectionSubgroup,
      command::TriggerAbility,
      command::TriggerDefaultAbility,
      command::Debug>;

  struct SideCommand {
    SideId side;
    Command command;
  };
}
