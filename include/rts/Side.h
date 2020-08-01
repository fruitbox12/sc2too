#pragma once

#include "Command.h"
#include "Resource.h"
#include "Selection.h"
#include "types.h"

#include <cassert>
#include <utility>

namespace rts {
  class Side {
  public:
    explicit Side(ResourceMap resources, UiUPtr ui)
      : resources_{std::move(resources)}, ui_{std::move(ui)} {}

    void exec(const World& world, const Command& cmd);
    Selection& selection() { return selection_; }
    const Selection& selection() const { return selection_; }
    const ResourceMap& resources() const { return resources_; }
    Quantity quantity(ResourceCPtr r) const {
      auto it = resources_.find(r);
      assert(it != resources_.end());
      return it->second;
    }
    const Ui& ui() const { return *ui_; }

  private:
    void exec(const World& world, const command::TriggerAbility& cmd);
    void exec(const World& world, const command::TriggerDefaultAbility& cmd);
    void exec(const World& world, const command::Selection& cmd);

    ResourceMap resources_;
    Selection selection_;
    UiUPtr ui_;
  };
}
