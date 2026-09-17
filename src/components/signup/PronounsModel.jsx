import { useState } from "react";

const pronounOptions = [
  "he",
  "him",
  "his",
  "she",
  "her",
  "hers",
  "they",
  "them",
  "theirs",
  "ze",
  "zir",
  "zirs",
  "ve",
  "ver",
];

function PronounsModal({
  selected,
  onClose,
  onSave,
}) {
  const [tempSelected, setTempSelected] =
    useState(selected);

  const togglePronoun = (pronoun) => {
    setTempSelected((current) => {

      if (current.includes(pronoun)) {
        return current.filter(
          (item) => item !== pronoun
        );
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, pronoun];
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
    <div
      className="
        w-full
        max-w-[500px]
        rounded-t-3xl
        bg-[#15151c]
        p-6
        shadow-2xl
      "
    >

        {/* Drag indicator */}

        <div className="flex justify-center pt-3">
          <div className="h-1 w-10 rounded-full bg-white" />
        </div>


        {/* Header */}

        <div
          className="
            flex
            items-start
            justify-between
            px-6
            pb-5
            pt-5
          "
        >

          <div>
            <h2 className="text-xl font-bold">
              SELECT PRONOUNS
            </h2>

            <p className="mt-2 text-sm text-white/60">
              Select up to 3
            </p>
          </div>


          <button
            onClick={onClose}
            className="text-xl text-white/70"
          >
            ×
          </button>

        </div>


        {/* Options */}

        <div
          className="
            max-h-[60vh]
            overflow-y-auto
            px-6
            pb-8
          "
        >

          {pronounOptions.map((pronoun) => {
            const checked =
              tempSelected.includes(pronoun);

            return (
              <button
                key={pronoun}
                type="button"
                onClick={() => togglePronoun(pronoun)}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  py-2.5
                  text-left
                "
              >

                <span
                  className={`
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border

                    ${
                      checked
                        ? "border-white bg-white"
                        : "border-white/30"
                    }
                  `}
                >
                  {checked && (
                    <span className="text-sm text-black">
                      ✓
                    </span>
                  )}
                </span>


                <span className="text-base">
                  {pronoun}
                </span>

              </button>
            );
          })}

        </div>


        {/* Save */}

        <div className="border-t border-white/10 p-5">

          <button
            type="button"
            onClick={() => {
              onSave(tempSelected);
              onClose();
            }}
            className="
              w-full
              rounded-xl
              bg-white
              py-4
              font-medium
              text-black
            "
          >
            DONE
          </button>

        </div>

      </div>

    </div>
  );
}

export default PronounsModal;