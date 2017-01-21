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

const topics = {};

const subscribe = ( topic, handler ) => topics[ topic ].push( handler );

const unsubscribe = ( topic, handler ) => {
    const handlers = topics[ topic ] || [];

    const index = handlers.indexOf( handler );

    topics[ topic ] = ( index === -1 ) ?
        topics[ topic ] :
        [ ...handlers.slice( 0, index ), ...handlers.slice( index + 1 ) ];
};

const publish = ( topic, payload ) => topics[ topic ].forEach( ( handler ) => handler( payload ) );

exports.subscribe = subscribe;
exports.unsubscribe = unsubscribe;
exports.publish = publish;
exports.topics = topics;