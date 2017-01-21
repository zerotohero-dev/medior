/*
 *          _  .          .     +           .
 *        .(_)          .              *          '
 *        .   .      .    .   /               *        *
 *          .           .    /           +                 '*
 *    . .        .  .       /    .
 *        .  +       .     *
 *       .                   medior
 *
 * This project is a part of the “Byte-Sized JavaScript” videocast.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

const medior = require( 'medior' );
const subscribe = medior.subscribe;
const publish = medior.publish;

const log = console.log;

subscribe( 'hello', ( data ) => log( 'hello-subscription-1', data ) );
subscribe( 'hello', ( data ) => log( 'hello-subscription-2', data ) );
subscribe( 'hello', ( data ) => log( 'hello-subscription-3', data ) );

publish( 'hello', { meaningOfLife: 42} );
