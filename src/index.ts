export {};

// EXAMPLE 1 - Use a Switch statement with Enums in TypeScript

enum Sizes {
  Small,
  Medium,
}

function getSize(size: Sizes) {
  switch (size) {
    case Sizes.Small:
      console.log('small');
      return 'S';
    case Sizes.Medium:
      console.log('medium');
      return 'M';

    default:
      throw new Error(`Non-existent size in switch: ${size}`);
  }
}

console.log(getSize(Sizes.Small)); // 👉️ "S"
console.log(getSize(Sizes.Medium)); // 👉️ "M"

// ---------------------------------------------------

// // EXAMPLE 2 - Use a Switch statement with Numeric Enums in TypeScript

// enum Sizes {
//   Small,
//   Medium,
// }

// switch (Number(Sizes.Small)) {
//   case Sizes.Small:
//     // 👇️ this runs
//     console.log('size is S');
//     break;
//   case Sizes.Medium:
//     console.log('size is M');
//     break;

//   default:
//     console.log(`non-existent size: ${Sizes.Small}`);
//     break;
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Use conversion to String if necessary

// enum Sizes {
//   Small = 'S',
//   Medium = 'M',
// }

// switch (String(Sizes.Small)) {
//   case Sizes.Small:
//     console.log('size is S');
//     break;
//   case Sizes.Medium:
//     console.log('size is M');
//     break;

//   default:
//     console.log(`non-existent size: ${Sizes.Small}`);
//     break;
// }
