#pragma once

#include "rts/AbilityState.h"
#include "rts/SemaphoreLock.h"
#include "rts/abilities.h"
#include "rts/types.h"

namespace rts::abilities::state {
  class Gather : public ActiveAbilityStateTpl<Gather> {
  public:
    using Desc = abilities::Gather;
    using State = abilities::GatherState;

    static void trigger(
        World& w, Entity& e, ActiveAbilityStateUPtr& as, const Desc& desc, Point target);

    explicit Gather(const Desc& desc, Point target) : desc_{desc}, target_{target} {}

    AbilityStepResult step(const World& w, const Entity& e) final;
    void cancel(World& w) final;
    int state() const final { return int(state_); }

  private:
    AbilityStepResult init(const World& w, const Entity& entity);
    AbilityStepAction moveTo(Point p);
    AbilityStepAction tryOccupy();
    AbilityStepAction finishGathering();
    AbilityStepAction finishDelivering();

    const Desc desc_;
    State state_{State::Init};
    Point target_;
    const AbilityState* moveAbilityState_{};
    EntityWId base_;
    ResourceFieldWId targetField_;
    SemaphoreLock<ResourceField> targetFieldLock_;
    ResourceCPtr resource_{};
    ResourceGroupId targetGroup_{};
  };
}
