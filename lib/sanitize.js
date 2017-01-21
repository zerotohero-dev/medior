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

const { noop } = require( 'delgado' );

const {
    topics
} = require( './core' );

const sanitize = ( topic, handler ) => {
    if ( !topic ) { throw new Error( 'Topic must be defined.' ); }
    if ( !handler ) { throw new Error( 'Handler should be defined.' ); }
    if ( typeof topic !== 'string' ) { throw new Error( 'Topic should be a `string`.' ); }
    if ( typeof handler !== 'function' ) { throw new Error( 'Handler should be a `function`.' ); }
};

const sanitizeTopic = ( topic ) => sanitize( topic, noop );

const ensureTopic = ( topic ) => topics [ topic ] = topics[ topic ] || [];

exports.sanitize = sanitize;
exports.sanitizeTopic = sanitizeTopic;
exports.ensureTopic = ensureTopic;
