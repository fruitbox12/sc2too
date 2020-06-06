#pragma once

#include "dim.h"
#include "rts/types.h"
#include "util/Matrix.h"

#include <array>
#include <iosfwd>
#include <string>
#include <vector>

namespace ui {
  struct Sprite {
    util::Matrix<std::array<std::wstring, dim::cellWidth + 1>> matrix;

    Sprite() = default;
    explicit Sprite(const std::wstring& s);
    explicit Sprite(std::wistream&& is);
    explicit Sprite(const std::vector<std::wstring>& lines);

    rts::Rectangle area(rts::Point topLeft) const;
  };

  template<typename T>
  class SpriteUi : public rts::Ui {
  public:
    virtual const Sprite& sprite(const T&) const = 0;
  };

  template<typename T>
  inline const Sprite& getSprite(const T& object) {
    return static_cast<const SpriteUi<T>&>(object.ui()).sprite(object);
  }
}
