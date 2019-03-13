import React, { PureComponent } from "react";
import P from "react-particles-js";
const types = {
  lines: {
    particles: {
      number: {
        value: 40
      },
      line_linked: {
        enable: true,
        opacity: 0.5
      },
      size: {
        value: 3
      }
    }
  },
  nightSky: {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      line_linked: {
        enable: true,
        opacity: 0.1
      },
      move: {
        direction: "right",
        speed: 0.1
      },
      size: {
        value: 1
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1
        }
      }
    },

    retina_detect: true
  },
  snow: {
    particles: {
      number: {
        value: 120,
        density: {
          enable: false
        }
      },
      size: {
        value: 8,
        random: true
      },
      move: {
        direction: "bottom",
        out_mode: "out"
      },
      line_linked: {
        enable: false
      }
    }
  },
  bubble: {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0
        },
        repulse: {
          distance: 200,
          duration: 4
        }
      }
    }
  }
};
export default class Particles extends PureComponent {
  render() {
    const { type = "snow" } = this.props;
    return (
      <P
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}
        params={types[type]}
      />
    );
  }
}
