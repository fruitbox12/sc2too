#include "rts/Ability.h"

#include "rts/World.h"

#include <cassert>

void rts::Ability::step(const World& world, const Entity& entity, WorldActionList& actions) {
  assert(state_);
  GameTime t = state_->step(world, entity, actions);
  if (t)
    nextStepTime_ = world.time + t;
  else
    cancel();
}
