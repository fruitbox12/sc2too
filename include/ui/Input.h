#pragma once

#include "InputEvent.h"
#include "Player.h"
#include "rts/Command.h"
#include "rts/types.h"

#include <optional>

namespace ui {
  struct IOState;

  class Input {
  public:
    explicit Input(IOState& ioState);

    void init();
    void finish();
    std::optional<rts::SideCommand> process(
        rts::Engine& engine, const rts::World& w, Player& player);

  private:
    bool processKbInput(rts::Engine& engine, const InputEvent& event);
    bool processMouseInput(const InputEvent& event);
    void updateMouseCell(const Camera& camera);
    InputEvent nextMouseEvent();
    InputEvent edgeScrollEvent();

    IOState& ios_;
  };
}
